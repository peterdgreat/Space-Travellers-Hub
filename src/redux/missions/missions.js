const MISSIONS_SUCCESS = 'MISSIONS_SUCCESS';

const initialState = {
  missions: [
    {
      mission_name: 'Thaicom',
      mission_id: '9D1B7E0',
      manufacturers: [
        'Orbital ATK',
      ],
      payload_ids: [
        'Thaicom 6',
        'Thaicom 8',
      ],
      wikipedia: 'https://en.wikipedia.org/wiki/Thaicom',
      website: 'http://www.thaicom.net/en/satellites/overview',
      twitter: 'https://twitter.com/thaicomplc',
      description: 'Thaicom is the name of a series of communications satellites .',
      status: true,
    },
    {
      mission_name: 'Telstar',
      mission_id: 'F4F83DE',
      manufacturers: ['SSL'],
      payload_ids: ['Telstar 19V', 'Telstar 18V'],
      wikipedia: 'https://en.wikipedia.org/wiki/Telesat',
      website: 'https://www.telesat.com/',
      twitter: null,
      description: 'Telstar 19V (Telstar 19 Vantage) is a communication satellite in ',
      status: false,
    },
  ],
};

const reduceMissions = (state = initialState, action) => {
  switch (action.type) {
    case MISSIONS_SUCCESS:
      return {
        ...state,
        missions: action.payload,
      };
    default:
      return state;
  }
};

export default reduceMissions;
