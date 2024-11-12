import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { PATHS } from "../paths";
import { SKILLS_ROUTES } from "../routes";
import style from "./skills.page.module.scss";

const Skills: React.FC = () => {
    return (
        <div className={style.skillsSection}>   
            <Switch>
                <Redirect exact from={PATHS.SKILLS} to={PATHS.IT_SKILLS}/>
                { SKILLS_ROUTES.map((route, index) => {
                    const Component = route.component;
                    return (
                        <Route
                            path={route.path}
                            exact
                            key={index}
                            render={(renderProps) => (
                                <Component {...renderProps} />
                            )}
                        />
                    )
                })}
            </Switch>
        </div>
    )

}
export default Skills;