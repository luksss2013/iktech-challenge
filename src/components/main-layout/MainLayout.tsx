import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Hero from "../../pages/hero/Hero";
import History from "../../pages/history/History";
import ContentArea from "../content-area/ContentArea";
import TopMenu from "../top-menu/TopMenu";
import "./MainLayout.css";

const MainLayout: React.FC = () => (
  <div className="main-layout">
    <BrowserRouter>
      <TopMenu></TopMenu>

      <ContentArea>
        <Switch>
          <Route path="/search" exact={true} component={Hero} />
        </Switch>
        <Switch>
          <Route path="/history" exact={true} component={History} />
        </Switch>
      </ContentArea>
    </BrowserRouter>
  </div>
);

export default MainLayout;
