const ROLLBACK_TIME = 120000;
const LIST_REFRESH_INTERVAL = 500;
const PARKED_REFRESH_INTERVAL = 5000;
const DATA_FETCH_INTERVAL = 1000;
const DATA_FETCH_INTERVAL_PARKED = 10000;
const DATA_SLIDE_INTERVAL = 5000;
const TRIP_END_TIMEOUT = 180000;
const DEVICE_OFFLINE_TIMEOUT = 900000;
const MAP_CENTERING_INTERVAL = 5000;

const serverURL = window.require ? "http://localhost:8080/api/" : "/hub/api/";
//const serverURL = window.require ? "http://localhost:8080/api/" : "/api/";
