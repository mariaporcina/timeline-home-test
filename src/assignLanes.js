/**
 * Takes an array of items and assigns them to lanes based on start/end dates.
 * @returns an array of arrays containing items.
 */
export default function assignLanes(items) {
    const sortedItems = items.sort((a, b) =>
        new Date(a.start) - new Date(b.start)
    );

    const itemsWithDayCount = sortedItems.map(item => {
        const start = new Date(item.start);
        const end = new Date(item.end);
        const diff = end - start;
        item.days = Math.ceil(diff / (1000 * 60 * 60 * 24));
        return item;
    });

    const lanes = [];

    function assignItemToLane(item) {
        for (const lane of lanes) {
            if (new Date(lane[lane.length - 1].end) < new Date(item.start)) {
                lane.push(item);
                return;
            }
        }
        lanes.push([item]);
    }

    for (const item of itemsWithDayCount) {
        assignItemToLane(item);
    }

    const formatedLanes = [];
    const startDate = new Date(sortedItems[0].start);
    for (const lane of lanes) {
        const laneStart = new Date(lane[0].start);
        const diff = laneStart - startDate;
        const daysFromStart = Math.ceil(diff / (1000 * 60 * 60 * 24));

        formatedLanes.push({
            daysFromStart,
            lane: lane.map(item => ({ ...item }))
        });
    }

    return formatedLanes;
}
