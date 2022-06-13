import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	dimensionUnits = [{label: 'px', value: 'px'}, {label: '%', value: '%'}];
	width = '100%';
	height = '100%';
	lockAspect = false;
	aspectRatio = null;

	dimensionChanged(prop: string) {
		let counterProp = prop === 'width' ? 'height' : 'width';

		if (this[prop] && this[prop].indexOf('%') !== -1) {
			this.lockAspect = false;
		}

		if (this.aspectRatio !== null) {
			if (this[prop] !== '' ) {
				this[counterProp] = Math.round(parseFloat(this[prop]) * this.aspectRatio).toString();
			} else {
				this[counterProp] = '';
			}
		}

		if (!this.lockAspect) {
			this.setAspectRatio();
		}
	}

	setAspectRatio() {
		if (this.lockAspect) {
			if (this.width === '' || this.height === '') {
				this.aspectRatio = 16 / 9;
			} else {
				this.aspectRatio = parseFloat(this.width) / parseFloat(this.height);
			}
		} else {
			this.aspectRatio = null;
		}
	}
}
