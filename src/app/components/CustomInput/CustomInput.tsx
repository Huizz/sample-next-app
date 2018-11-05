import * as Validator from 'validate.js';
import * as React from 'react';

import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

interface IState {
  hasError: boolean,
  error: any,  
}

interface IProps {
  inputType: string,
  inputLabel: string,
  inputValue: string | number,
  inputName: string,
  inputClass?: string,
  minLength?: number,
  maxLength?: number,
  isEmail?: boolean,
  classes: any,
  onChange: (inputName: string, inputValue: string | number) => void,
}

const styles = ({
  customInput: {
    width: '100%',
    border: '1px solid red'
  }
});

class CustomInput extends React.Component<IProps, IState>  {
  constructor(props: IProps) {
      super(props);
      this.state = {
          hasError: false,
          error: {},
      }

      this.onChangeInput = this.onChangeInput.bind(this);
  }

  render() {
      const { classes } = this.props; 
      let errorElement;
      if (this.state.hasError) {
          errorElement = <div className="custom__input__error-wrapper">
              <div className="custom__input__error__message">
                  {this.state.error[0]}
              </div>
          </div>
      } else {
          errorElement = null;
      }

      return (
          <Grid container spacing={8} className={classes.gridContainer}>
              <Grid item xs={12}>
                  <TextField 
                      value={this.props.inputValue}
                      name={this.props.inputName}
                      onChange={this.onChangeInput(this.props)} 
                      className={`${classes.gridInput} custom__input__input col-6  
                      ${this.props.inputClass}`}
                      placeholder="Please enter"
                      variant="outlined"
                      margin="normal"
                      label={this.props.inputLabel}/>
                  {errorElement}
              </Grid>
          </Grid> 
      )
  }

  public onChangeInput = (props: IProps) => (event: React.ChangeEvent<HTMLInputElement>) => {
      let constraints;
      if (props.minLength) {
          constraints = {
              value: { length: { minimum: props.minLength } }
          }
      }

      if (props.maxLength) {
          constraints = {
              value: { length: { maximum: props.maxLength } }
          }
      }

      if (props.isEmail) {
          constraints = {
              value: { email: { message: "^Invalid email" } }
          }
      }

      const errors = Validator.validate({ value: event.target.value }, constraints);
      this.setState({ hasError: errors !== undefined, error: errors ? errors.value : {} });
      props.onChange(event.currentTarget.name, event.target.value);
  }
}

export default withStyles(styles)(CustomInput);