import Assignment from '../classes/Assignment';

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

export default function getTask() {

    const countMethod = getCountMethos();

    switch (countMethod) {
        case 'addition':
            let assignmentAdd = null;

            if (Math.random() > .6) {

                const rndAddOne = Math.floor(Math.random() * Math.floor(10)) * 10;
                const max = 100 - rndAddOne;
                const rndAddTwo = Math.floor(Math.random() * Math.floor(max / 10)) * 10;

                assignmentAdd = new Assignment(
                    `${rndAddOne} + ${rndAddTwo}`,
                    rndAddOne + rndAddTwo,
                    false,
                    false,
                    null,
                    ''
                );

                //console.log('+', 'rndAddOne ', rndAddOne, 'rndAddTwo ', rndAddTwo, 'assignmentAdd ', assignmentAdd);

            } else {
                const rndAddOne = parseInt((Math.random() * 15).toFixed(0));
                const rndAddTwo = parseInt((Math.random() * 15).toFixed(0));

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
            const rndSubOne = parseInt((Math.random() * 14).toFixed(0));
            const rndsubTwo = parseInt((Math.random() * 14).toFixed(0));

            let assignmentSub = null;
            if (Math.random() > .6) {
                const rndSubOne = Math.floor(Math.random() * Math.floor(10)) * 10;
                const rndASubTwo = Math.floor(Math.random() * Math.floor(rndSubOne / 10)) * 10;

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
            let rndhalfDouble = parseInt((Math.random() * 10).toFixed(0));

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
            const rndMultOne = parseInt((Math.random() * 4).toFixed(0));
            const rndMultTwo = parseInt((Math.random() * 5).toFixed(0));

            const assignmentMult = new Assignment(`${rndMultOne} * ${rndMultTwo}`, rndMultOne * rndMultTwo, false, null, '');
            return assignmentMult;
    }
}
