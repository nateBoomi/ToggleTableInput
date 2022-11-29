                class ToggleTableInput extends React.Component {
                    constructor() {
                        super(...arguments);
                        this.onChange = (e) => {
                			let val = "false";
                			let chk = false;
                			
                			if (typeof this.state.value !== "undefined") chk = (this.state.value === true || this.state.value == "true" || this.state.value == "True");
                			else chk = (this.props.contentValue == "True" || this.props.contentValue == "true");
                			
                			chk = !chk;
                			if (chk) val = "true"
                			                
                            this.setState({ value: val, checked: chk });
                        };
                        this.onKeyUp = (e) => {
                            if (e.keyCode === 13 && !this.props.isDesignTime && !e.shiftKey) {
                                e.preventDefault();
                                e.stopPropagation();
                                this.onCommit();
                            }
                        };
                        this.onFocus = (e) => {
                            this.setState({ isFocused: true });
                        };
                        this.onBlur = () => {
                            this.setState({ isFocused: false });
                            if (!this.props.isDesignTime)
                                this.onCommit();
                        };
                        this.onClick = (e) => {
                            e.stopPropagation();
                        };
                        this.onCommit = () => {
                            this.props.onCommitted(this.props.id, this.props.propertyId, this.state.value);
                        };
                        this.onCloseModal = (e) => {
                            this.setState({ value: this.state.currentValue, currentValue: null });
                            manywho.model.setModal(this.props.flowKey, null);
                        };
                    }
                
                    componentWillMount() {
                        this.setState({ 
                		  value: this.props.contentValue,
                		  id: this.props.id,
                		  propertyId: this.props.propertyId,
                		  flowKey: this.props.flowKey,
                		  contentType: this.props.contentType,
                		  contentFormat: this.props.contentFormat,
                		  onCommitted: this.props.onCommitted
                		  
                		  });
                    }
                    componentWillReceiveProps(nextProps) {
                        this.setState({ value: nextProps.value });
                    }
                    render() {
                        manywho.log.info('Rendering Table Input: ' + this.props.id);
                        let className = 'input-sm';
                        //if (!this.state.isFocused)
                            className += ' table-input-display';
                        if (!manywho.utils.isEqual(this.props.contentType, manywho.component.contentTypes.boolean, true)) {
                            className += ' form-control';
                        }
                        
                        
                        const props = {
                            className,
                            onClick: this.onClick,
                            onChange: this.onChange,
                            onKeyUp: this.onKeyUp,
                            value: this.state.value,
                            onFocus: this.onFocus,
                			onBlur: this.onBlur,
                        };
                                        		
                		if (typeof this.state.value !== "undefined") props.checked = (this.state.value === true || this.state.value == "true" || this.state.value == "True");
                		else props.checked = (this.props.contentValue == "True" || this.props.contentValue == "true");
                
                        props.type = 'checkbox';
                        
                        let togClass = "round btn";
                        if (props.checked) togClass = "round btn-primary";
                        props.type = 'checkbox';
                        
                   
                        //Input needs to be rendered on screen to track value
                        //So I force the input's display to block and move it off screen where nobody will see it.
                           return React.createElement("div", {className: "toggle-button"},
                                    React.createElement("label", null, 
            		                	React.createElement("input", Object.assign({ id: "myId", style:{display: "block", position: "fixed", top: "-500px"} }, props)),
                                        React.createElement("div",  {className: togClass})
                                        )
                                    )
                    }
                }
                manywho.component.register('ToggleTableInput', ToggleTableInput);
                