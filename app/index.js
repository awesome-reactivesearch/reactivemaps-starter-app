import React, { Component } from 'react';
import ReactDom from 'react-dom';
import {
	ReactiveBase,
	SingleList,
	ReactiveMap
} from '@appbaseio/reactivemaps';

class HelloWorld extends Component {
	render() {
		return (
			<ReactiveBase
				app="reactivemap-demo"
				credentials="mERhtO4vc:50ffe077-9232-4a39-9fa7-4a69bace8f63"
				type="meetupdata1"
			>
				<div className="row">
					<div className="col s6 col-xs-6">
						<SingleList
							componentId="CitySensor"
							dataField="group.group_city.raw"
							title="SingleList"
							size={100}
						/>
					</div>

					<div className="col s6 col-xs-6">
						<ReactiveMap
							dataField="location"
							defaultZoom={13}
							setMarkerCluster={false}
							defaultMapStyle="Light Monochrome"
							autoCenter={true}
							size={100}
							showSearchAsMove={true}
							showMapStyles={true}
							title="Meetupblast"
							react={{
								and: "CitySensor"
							}}
						/>
					</div>
				</div>
			</ReactiveBase>
		);
	}
}

ReactDom.render(<HelloWorld />, document.getElementById('app'));
