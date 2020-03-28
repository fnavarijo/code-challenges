// Que denota que cambio de lugar? Su numero no hace match con el indice
// Solamente pueden pasar de atras para adelante.

function minimumBribes(q) {
    let globalBribe = 0;
    let isChaotic = false;
    let orderingQueue = q;
    for (let i = q.length - 1; i >= 0; i--) {
        if (q[i] != i + 1) {
            let spaceAhead = 0;
            for (let j = i; j >= 0; j--) {
                if (q[j] != i + 1) spaceAhead++;
                else break;
            }

            if (spaceAhead > 2) {
                isChaotic = true;
                break;
            }

            globalBribe += spaceAhead;

            while(spaceAhead != 0) {
                const actualNumber = orderingQueue[i-spaceAhead];
                orderingQueue[i-spaceAhead] = orderingQueue[i-(spaceAhead - 1)];
                orderingQueue[i-(spaceAhead - 1)] = actualNumber;
                spaceAhead--;
            }
        }
    }

    console.log(isChaotic ? 'Too chaotic' : globalBribe);
}

minimumBribes([2, 1, 5, 3, 4]);
minimumBribes([2, 5, 1, 3, 4]);
minimumBribes([1, 2, 5, 3, 4, 7, 8, 6]);
minimumBribes([1, 2, 5, 3, 7, 8, 6, 4]);