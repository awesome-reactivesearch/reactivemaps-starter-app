import React, { Component } from 'react';
import ReactDom from 'react-dom';
import {
	ReactiveBase,
	SingleList,
	ResultList
} from '@appbaseio/reactivebase';

class HelloWorld extends Component {
	render() {
		return (
			<ReactiveBase
				app="meetup_demo"
				username="LPpISlEBe"
				password="2a8935f5-0f63-4084-bc3e-2b2b4d1a8e02"
				type="meetupdata1"
			>
				<div className="row">
					<div className="col s6 col-xs-6">
						<SingleList
							componentId="CitySensor"
							appbaseField="group.group_city.raw"
							title="SingleList"
							defaultSelected="New York"
							size={100}
							{...this.props}
						/>
					</div>

					<div className="col s6 col-xs-6">
						<ResultList
							componentId="SearchResult"
							appbaseField="group.group_topics.topic_name_raw"
							title="Results"
							sortBy="asc"
							from={0}
							size={20}
							requestOnScroll={true}
							actuate={{
								CitySensor: {"operation": "must"}
							}}
						/>
					</div>
				</div>
			</ReactiveBase>
		);
	}
}

ReactDom.render(<HelloWorld />, document.getElementById('app'));
