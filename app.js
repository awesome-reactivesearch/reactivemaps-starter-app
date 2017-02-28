var {
	ReactiveBase,
	SingleList,
	MultiList,
	ReactiveMap } = ReactiveMaps;

var Testing = React.createClass({
	onPopoverTrigger: function(marker) {
		return (
			<div>
				{marker._source.place_info}
			</div>
		);
	},
	render: function () {
		return (
			<div className="container-fluid h-100 liveExample">
				<ReactiveBase
					app="hellojson"
					username="Xxgkgxhk1"
					password="6b501af7-604b-4a25-8a52-5194dfe106aa" >
					<div className="row">
						<div className="col s4 col-xs-4 col-sm-4 appbaseListCol">
							<SingleList
								componentId="CitySensor"
								appbaseField="city"
								title="Cities"
								defaultSelected="sanfrancisco"
								showSearch={true}
							/>
						</div>
						<div className="col s8 col-xs-8 col-sm-8 h-100" style={{height: '1000px'}}>
							<ReactiveMap
								appbaseField="location"
								showPopoverOn="click"
								onPopoverTrigger={this.onPopoverTrigger}
								react={{
									and: "CitySensor"
								}}
							/>
						</div>
					</div>
				</ReactiveBase>
			</div>
		)
	}
})

ReactDOM.render(
	<Testing></Testing>,
	document.getElementById('root')
);
