import Vue from 'vue';
import moment from 'moment';

Vue.filter('dateFormat', function(dateStr, pattern = 'YYYY-MM-DD HH:mm:ss') {
  return moment(dateStr).format(pattern);
});

export default {
  
}