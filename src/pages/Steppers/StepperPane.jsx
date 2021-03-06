import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import {withStyles} from "@material-ui/core/styles";
import { StatusButton } from 'plugins/Button';
import { StepperPane, StepPane } from 'plugins/Stepper';
import CodeAddr from 'components/CodeAddr/CodeAddr.jsx';
import Usage from "../../components/Usage/Usage";


const styles = {
  pane: {},
  step: {
    padding: 16,
  },
};

function getSteps() {
  return ['Select campaign settings', 'Create an ad group', 'Create an ad'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return `The Stepper can be controlled by passing the current step index (zero-based) as the activeStep property. Stepper orientation is set using the orientation property.

This example also shows the use of an optional step by placing the optional property on the second Step component. Note that it's up to you to manage when an optional step is skipped. Once you've determined this for a particular step you must set completed={false} to signify that even though the active step index has gone beyond the optional step, it's not actually complete.`
    case 1:
      return `Non-linear steppers allow users to enter a multi-step flow at any point.

This example is similar to the regular horizontal stepper, except steps are no longer automatically set to disabled={true} based on the activeStep property.

We've used the StepButton here to demonstrate clickable step labels as well as setting the completed flag however because steps can be accessed in a non-linear fashion it's up to your own implementation to determine when all steps are completed (or even if they need to be completed).;`;
    case 2:
      return `This is essentially a back/next button positioned correctly. You must implement the textual description yourself, however, an example is provided below for reference.`;
    default:
      return 'Unknown step';
  }
}

class App extends React.Component {
  state = {
    activeStep: 0,
  };

  handle = () => {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        Math.random() > 0.5 ? reject('err') : resolve('ok');
      }, 1000);
    }).then(function(r) {
      return true;
    });
  };

  render() {
    const { classes, theme } = this.props;

    const steps = getSteps();

    return ( 
     [<div><CodeAddr addr="Steppers/StepperPane.jsx"/>
            <Usage>
{
`//first: installation
npm install deepmerge --save (button依赖)
//second: 点击代码地址,查看demo示例
`}
            </Usage></div>,
      <StepperPane
        className={classes.pane}
        unmountAfterBack={false}
        finishButton={
          <StatusButton size="small" color="primary" variant="raised" onHandler={this.handle}>
            SAVE
          </StatusButton>
        }
      >
        {steps.map((label, index) => {
          return (
            <StepPane key={label} className={classes.step}>
              <p>{getStepContent(index)}</p>
            </StepPane>
          );
        })}
      </StepperPane>
     ]);
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(App);
