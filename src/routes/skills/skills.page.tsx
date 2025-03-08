import { Redirect, Route, Switch } from "react-router-dom";
import { PATHS } from "../paths";
import { SKILLS_ROUTES } from "../routes";

const Skills: React.FC = () => {
    return (
    
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
    
    )

}
export default Skills;