import React, { useEffect, useState } from "react";
import store from "./index";
import { bindActionCreators } from "redux";

const myBindActionCreators = function(actionCreators:Record<string, any>, dispatch:Function){
  const boundActionCreators:Record<string, Function> = {};

  for (const key in actionCreators) {
    const actionCreator = actionCreators[key];
    if(typeof actionCreator === 'function'){
      boundActionCreators[key] = (...args: any) => dispatch(actionCreator(...args));
    }
  }

  return boundActionCreators;
}

export function connect(mapStateToProps: any, mapDispatchToProps: any) {
  if (!mapStateToProps) {
    mapStateToProps = (state: any) => ({});
  }
  if (!mapDispatchToProps) {
    mapDispatchToProps = (dispatch: any) => ({});
  }

  const { getState, dispatch, subscribe } = store;
  
  return function (WrappedComponent: React.FC<any>) {
    return function (props: any) {
      const [_, update] = useState(0);

      useEffect(() => {
        const unsubscribe = subscribe(() => {
          update(+new Date());
        });

        return () => {
          unsubscribe();
        };
      }, [subscribe]);

      const stateProps = mapStateToProps(getState());
      let dispatchProps = {}
      if(typeof mapDispatchToProps == 'function'){
        dispatchProps = mapDispatchToProps(dispatch);
      }else if(typeof mapDispatchToProps == 'object'){
        // dispatchProps = bindActionCreators(mapDispatchToProps, dispatch)
        dispatchProps = myBindActionCreators(mapDispatchToProps, dispatch)
      }

      return <WrappedComponent {...props} {...stateProps} {...dispatchProps} />;
    };
  }
}


export function Provide() {}
