"use client";

import PropTypes from "prop-types";
import React, { useContext, useMemo, useReducer } from "react";

export const UIContext = React.createContext(null);
UIContext.displayName = "UIContext";

export function reducer(state: any, action: any) {
  switch (action.type) {
    case "OPEN_SIDENAV": {
      return { ...state, openSidenav: action.value };
    }
    case "SIDENAV_TYPE": {
      return { ...state, sidenavType: action.value };
    }
    case "SIDENAV_COLOR": {
      return { ...state, sidenavColor: action.value };
    }
    case "TRANSPARENT_NAVBAR": {
      return { ...state, transparentNavbar: action.value };
    }
    case "FIXED_NAVBAR": {
      return { ...state, fixedNavbar: action.value };
    }
    case "OPEN_RIGHT_SIDENAVE": {
      return { ...state, openRightSidenav: action.value };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

interface UIControllerProviderProps {
  children: React.ReactNode;
}
export function UIControllerProvider({ children }: UIControllerProviderProps) {
  const initialState = {
    openSidenav: false,
    sidenavColor: "blue",
    sidenavType: "dark",
    transparentNavbar: true,
    fixedNavbar: false,
    openRightSidenav: false,
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  const value: any = useMemo(
    () => ({ uiState: state, uiDispatch: dispatch }),
    [state, dispatch]
  );

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
}

export function useUIController() {
  const context = useContext(UIContext);

  if (!context) {
    throw new Error(
      "useUIController should be used inside the UIControllerProvider."
    );
  }

  return context;
}
UIControllerProvider.displayName = "/src/context/UIContext.tsx";

UIControllerProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const setOpenSidenav = (dispatch: any, value: any) =>
  dispatch({ type: "OPEN_SIDENAV", value });
export const setSidenavType = (dispatch: any, value: any) =>
  dispatch({ type: "SIDENAV_TYPE", value });
export const setSidenavColor = (dispatch: any, value: any) =>
  dispatch({ type: "SIDENAV_COLOR", value });
export const setTransparentNavbar = (dispatch: any, value: any) =>
  dispatch({ type: "TRANSPARENT_NAVBAR", value });
export const setFixedNavbar = (dispatch: any, value: any) =>
  dispatch({ type: "FIXED_NAVBAR", value });
export const setOpenRightSidenav = (dispatch: any, value: any) =>
  dispatch({ type: "OPEN_RIGHT_SIDENAVE", value });
