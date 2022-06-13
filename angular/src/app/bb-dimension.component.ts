import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormControl } from '@angular/forms';

@Component({
	selector: 'bb-dimension',
	templateUrl: './bb-dimension.component.html',
	styleUrls: ['./bb-dimension.component.scss'],
	providers: [{
		provide: NG_VALUE_ACCESSOR,
		useExisting: forwardRef(() => BbDimensionComponent),
		multi: true
	}]
})

export class BbDimensionComponent implements ControlValueAccessor {
	@Input() units: any[] = null;
	@Input() useUnits: 'both' | 'px' | 'percent';
	@Input() placeholder = '';
	@Input() inputWidth = '130px';

	dimension: any;
	dimensionUnit: '%' | 'px' = 'px';

	formControl: FormControl;

	constructor(

		) {
			this.formControl = new FormControl();
	}

	ngOnInit() {
		if (this.useUnits) {
			switch (this.useUnits) {
				case 'both': this.units = [{label: 'px', value: 'px'}, {label: '%', value: '%'}];
					break;
				case 'px': this.units = [{label: 'px', value: 'px'}];
					break;
				case 'percent': this.units = [{label: '%', value: '%'}];
					break;
			}
		}
	}

	onKeydown(event: KeyboardEvent) {
		if (isNaN(parseInt(event.key, 10)) &&
			(event.key !== 'Backspace' &&
			event.key !== 'Enter' &&
			event.key !== 'Tab' &&
			event.key !== 'Delete' &&
			!event.key.startsWith('Arrow'))) {
			event.preventDefault();
		}
	}

	sanitizeInput(value: string) {
		let number: number = parseInt(value, 10);
		if (value && value.length && value.match(/0+/) === null) {
			if (isNaN(number)) {
				value = '100';
			} else {
				value = number.toString();
			}
		}
		return value;
	}

	onValueChange(value: any) {
		value = this.sanitizeInput(value);
		this.dimension = value;
		if (this.dimensionUnit === '%') {
			value += '%';
		}
		this.propagateChange(value);
	}

	onDimensionUnitChange() {
		this.onValueChange(this.dimension);
	}

	// ControlValueAccessor fields:
	writeValue(value: string) {
		if (value && value.endsWith && value.endsWith('%')) {
			this.dimensionUnit = '%';
			value = value.replace('%', '');
		} else {
			this.dimensionUnit = 'px';
		}
		let oldValue = value;
		value = this.sanitizeInput(value);
		if (oldValue !== value) {
			this.propagateChange(value);
		}
		this.dimension = value;
	}

	propagateChange(_: any) {}

	registerOnChange(fn: any) {
		this.propagateChange = fn;
	}

	registerOnTouched() {

	}
}
