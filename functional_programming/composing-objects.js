const pipe = require('lodash/fp/flow');

const eat = person => {
  let eat = false;

  return {
    ...person,
    startEating () {
      eat = true;
      return this;
    },
    finishEating () {
      eat = false;
      return this;
    },
    isEating () {
      return eat;
    }
  }
}

const sleep = ({ hoursToSleep = 8 } = {}) => person => {
  let sleep = false;
  let currentSleptTime = 8;

  return {
    ...person,
    startSleeping () {
      sleep = true;
      return this;
    },
    wakeUp ({ sleptTime = 8 }) {
      sleep = false;
      currentSleptTime = hoursToSleep - sleptTime;
      return this;
    },
    isSleeping () {
      return sleep;
    },
    currentSleptTime () {
      return currentSleptTime;
    }
  }
}

const study = person => {
  let study = false;

  return {
    ...person,
    startStudying() {
      study = true;
      return this;
    },
    isStudying () {
      return study;
    },
    finishStudying () {
      study = false;
      return this;
    }
  }
}

const programer = pipe(
  eat,
  sleep({ hoursToSleep: 2 }),
);

const student = pipe(
  eat,
  study
);

const me = programer({});
const sister = student({});

console.log('Im eating? :', me.startEating().startSleeping().finishEating().wakeUp({ sleptTime: 1 }).isEating());

console.log('My sister is studying? :', sister.startEating().startStudying().isStudying());