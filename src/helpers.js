import Assignment from './classes/Assignment';

const getCountMethos = () => {
    const rnd = Math.random();
    if (rnd < (.25)) {
        return 'addition';
    } else if (rnd < .5 && rnd > .25) {
        return 'substraction';
    } else if (rnd < .75 && rnd > .5) {
        return 'halfDouble';
    } else {
        return 'multiplication';
    }
}

export default function getTask(level) {

    if (level !== 1 && level !== 2 && level !== 3) {
        console.error('level can only be 1, 2 or 3');
        return;
    }
    console.log('level', level);

    const countMethod = getCountMethos();

    switch (countMethod) {
        case 'addition':
            let assignmentAdd = null;

            let rndAddOne = 0, max = 0, rndAddTwo = 0;

            if (Math.random() > .6) {

                switch (level) {
                    case 1: {
                        rndAddOne = Math.floor(Math.random() * Math.floor(10)) * 5;
                        max = 50 - rndAddOne;
                        rndAddTwo = Math.floor(Math.random() * Math.floor(max / 10)) * 5;
                        break;
                    }
                    case 2: {
                        rndAddOne = Math.floor(Math.random() * Math.floor(10)) * 10;
                        max = 100 - rndAddOne;
                        rndAddTwo = Math.floor(Math.random() * Math.floor(max / 10)) * 10;
                        break;
                    }
                    case 3: {
                        rndAddOne = Math.floor(Math.random() * Math.floor(10)) * 15;
                        max = 150 - rndAddOne;
                        rndAddTwo = Math.floor(Math.random() * Math.floor(max / 10)) * 15;
                        break;
                    }
                }

                assignmentAdd = new Assignment(
                    `${rndAddOne} + ${rndAddTwo}`,
                    rndAddOne + rndAddTwo,
                    false,
                    false,
                    null,
                    ''
                );
            } else {
                let rndAddOne = 0, rndAddTwo = 0;

                switch (level) {
                    case 1: {
                        rndAddOne = parseInt((Math.random() * 10).toFixed(0));
                        rndAddTwo = parseInt((Math.random() * 10).toFixed(0));
                        break;
                    }
                    case 2: {
                        rndAddOne = parseInt((Math.random() * 15).toFixed(0));
                        rndAddTwo = parseInt((Math.random() * 15).toFixed(0));
                        break;
                    }
                    case 3: {
                        rndAddOne = parseInt((Math.random() * 20).toFixed(0));
                        rndAddTwo = parseInt((Math.random() * 20).toFixed(0));
                        break;
                    }
                }

                assignmentAdd = new Assignment(
                    `${rndAddOne} + ${rndAddTwo}`,
                    rndAddOne + rndAddTwo,
                    false,
                    false,
                    null,
                    ''
                );
            }

            return assignmentAdd;

        case 'substraction':
            let multip = 0;
            switch (level) {
                case 1: {
                    multip = 10;
                    break;
                }
                case 2: {
                    multip = 14;
                    break;
                }
                case 3: {
                    multip = 19;
                    break;
                }
            }
            const rndSubOne = parseInt((Math.random() * multip).toFixed(0));
            const rndsubTwo = parseInt((Math.random() * multip).toFixed(0));

            let assignmentSub = null;
            if (Math.random() > .6) {
                let multiplier = 0;
                switch (level) {
                    case 1: {
                        multiplier = 5;
                        break;
                    }
                    case 2: {
                        multiplier = 10;
                        break;
                    }
                    case 3: {
                        multiplier = 15;
                        break;
                    }
                }

                const rndSubOne = Math.floor(Math.random() * Math.floor(10)) * multiplier;
                const rndASubTwo = Math.floor(Math.random() * Math.floor(rndSubOne / 10)) * multiplier;

                assignmentSub = new Assignment(
                    `${rndSubOne} - ${rndASubTwo}`,
                    rndSubOne - rndASubTwo,
                    false,
                    false,
                    null,
                    ''
                );

                //console.log('-', 'rndAddOne ', rndSubOne, 'rndASubTwo ', rndASubTwo, 'assignmentAdd ', assignmentSub);
            } else {
                assignmentSub = new Assignment(
                    `${rndSubOne} - ${rndsubTwo}`,
                    rndSubOne - rndsubTwo,
                    false,
                    false,
                    null,
                    ''
                );
            }

            if (rndSubOne < rndsubTwo) {
                assignmentSub = new Assignment(
                    `${rndsubTwo} - ${rndSubOne}`,
                    rndsubTwo - rndSubOne,
                    false,
                    false,
                    null,
                    ''
                );
            }

            return assignmentSub;

        case 'halfDouble':
            let multiplier = 0;
            switch (level) {
                case 1: {
                    multiplier = 5;
                    break;
                }
                case 2: {
                    multiplier = 10;
                    break;
                }
                case 3: {
                    multiplier = 15;
                    break;
                }
            }

            let rndhalfDouble = parseInt((Math.random() * multiplier).toFixed(0));

            let assignmentHalfDouble = null;

            if (Math.random() > .5) {
                assignmentHalfDouble = new Assignment(
                    `dubbelt av ${rndhalfDouble}`,
                    rndhalfDouble * 2,
                    false,
                    false,
                    null,
                    ''
                );
            } else {
                rndhalfDouble = 2 * Math.round(rndhalfDouble / 2);
                assignmentHalfDouble = new Assignment(
                    `hälften av ${rndhalfDouble}`,
                    rndhalfDouble / 2,
                    false,
                    false,
                    null,
                    ''
                );
            }

            return assignmentHalfDouble;

        default:

            let multiplierTimes = 0;
            switch (level) {
                case 1: {
                    multiplierTimes = 3;
                    break;
                }
                case 2: {
                    multiplierTimes = 5;
                    break;
                }
                case 3: {
                    multiplierTimes = 7;
                    break;
                }
            }


            const rndMultOne = parseInt((Math.random() * multiplierTimes).toFixed(0));
            const rndMultTwo = parseInt((Math.random() * multiplierTimes).toFixed(0));

            const assignmentMult = new Assignment(`${rndMultOne} * ${rndMultTwo}`, rndMultOne * rndMultTwo, false, null, '');
            return assignmentMult;
    }
}
