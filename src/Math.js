import React, {Component} from 'react';

export default function Math(props){
    const sum = props.a + props.b;
    const diff = props.a - props.b;
    const prod = props.a * props.b;
    const quot = props.a / props.b;

    return (
      <div>
          <h3>The sum of {props.a} and {props.b} is {sum}.</h3>
          <br/>
          <h3>The difference of {props.a} and {props.b} is {diff}.</h3>
          <br/>
          <h3>The product of {props.a} and {props.b} is {prod}.</h3>
          <br/>
          <h3>The quotient of {props.a} and {props.b} is {quot}.</h3>
      </div>
    )

}