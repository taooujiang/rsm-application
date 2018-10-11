import React, { Component } from 'react'
import { Table, Input, Icon, Button, Popconfirm ,DatePicker} from 'antd'
import CalendarPicker from 'app/components/CalendarPicker'
import moment from 'moment'

export default class EditableCell extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: this.props.value,
			editable: false,
		}
	}
	handleChange(e) {
		const value = e.target.value;
		this.setState({ value });
	}
	translateTime(timeArr){
		return timeArr && timeArr.map((it,idx)=>moment(it).format("YYYY-MM-DD")).join("-")
	}
	handleTimeChange(time){
		this.setState({
			editable: false,
			value:time
		})
		if (this.props.onChange) {
			this.props.onChange(time.map((it,idx)=>moment(it).format("YYYY-MM-DD HH:mm:ss")));
		}
	}
	check() {
		this.setState({ editable: false });
		if (this.props.onChange) {
			this.props.onChange(this.state.value);
		}
	}
	edit() {
		this.setState({ editable: true });
	}
	renderCell(){
		const { value, editable } = this.state;
		const { inputType,type } = this.props

		if(editable){
			return type == 'time' ?
			<CalendarPicker
				value={value}
				format='YYYY-MM-DD'
				onChange={this.handleTimeChange.bind(this)}
			/> :
			<Input
				value={value}
				onChange={this.handleChange.bind(this)}
				onBlur={this.check.bind(this)}
				onPressEnter={this.check.bind(this)}
				suffix={
					<Icon
						type="check"
						className="editable-cell-icon-check"
						onClick={this.check.bind(this)}
					/>
				}
			/>
		}else{
			return (<div>
				{type == 'time' ? this.translateTime(value) : (value || ' ')}
				<Icon
					type="edit"
					className="editable-cell-icon"
					style={{cursor:"pointer",marginLeft:"5px"}}
					onClick={this.edit.bind(this)}
				/>
			</div>)
		}
	}
	render() {
		const { value, editable } = this.state;
		const { inputType,type } = this.props
		return this.renderCell()
		// return (
		// 	<div className="editable-cell">
		// 		{
		// 			editable ? (
		// 				{
		// 					type == 'time' ?
		// 					<DatePicker
		// 						value={moment(value)}
		// 						format='YYYY-MM-DD'
		// 						onChange={this.handleChange.bind(this)}
		// 					/> :
		// 					<Input
		// 						value={value}
		// 						onChange={this.handleChange.bind(this)}
		// 						onBlur={this.check.bind(this)}
		// 						onPressEnter={this.check.bind(this)}
		// 						suffix={
		// 							<Icon
		// 								type="check"
		// 								className="editable-cell-icon-check"
		// 								onClick={this.check.bind(this)}
		// 							/>
		// 						}
		// 					/>
		// 				}
		// 			) : (
		// 					<div>
		// 						{type == 'time' ? moment(value).format('YYYY-MM-DD') : (value || ' ')}
		// 						<Icon
		// 							type="edit"
		// 							className="editable-cell-icon"
		// 							style={{cursor:"pointer",marginLeft:"5px"}}
		// 							onClick={this.edit.bind(this)}
		// 						/>
		// 					</div>
		// 				)
		// 		}
		// 	</div>
		// );
	}
}
EditableCell.defaultProps = {
	type:"text"
}
