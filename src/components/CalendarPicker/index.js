import React, {Component} from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import { DatePicker } from 'antd'
const {RangePicker} = DatePicker;

class CalendarPicker extends Component {
  disabledDate(value){
    var {minDate,maxDate}= this.props
    return !value.isBetween(moment(minDate),moment(maxDate))
  }
  render() {
    let {children} = this.props
    return (
      <RangePicker {...this.props} disabledDate={this.disabledDate.bind(this)} />
    )
  }
}

CalendarPicker.defaultProps = {
  ranges: {
    '今天': [
      moment(), moment()
    ],
    '本周': [
      moment().startOf('week'), moment().endOf('week')
    ],
    '本月': [
      moment().startOf('month'), moment().endOf('month')
    ],
    '本年': [moment().startOf('year'), moment().endOf('year')]
  },
  showToday:true,
  format:'YYYY-MM-DD',
  minDate:'1900-01-01',
  maxDate:'2299-01-01'
}

export default CalendarPicker
