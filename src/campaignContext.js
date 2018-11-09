import React from "react";

const Context = React.createContext();

export const ContextProvider = props => {
  return (
    <Context.Provider
      value={{
        campaignQuestions: props.campaignQuestions
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export function campaignContext(Component) {
  return function CampaignConnectedComponent(props) {
    return (
      <Context.Consumer>
        {context => {
          return (
            <Component
              {...props}
              campaignQuestions={context.campaignQuestions}
            />
          );
        }}
      </Context.Consumer>
    );
  };
}
