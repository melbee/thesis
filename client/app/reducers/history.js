import axios from 'axios';

const initialState = { visData: [] };

export default (state = initialState) => {
  const oneMinute = 1000 * 60;
  const oneMinuteAgo = (new Date()).getTime() - oneMinute;

  chrome.history.search({
    text: '',              // Return every history item....
    startTime: oneMinuteAgo,  // that was accessed less than one minute ago.
  },
  (historyItems) => {
    axios.post('/api/history', historyItems)
    .then((res) => {
      return { ...state, visData: res.body.dummyData };
    });
  });
};
