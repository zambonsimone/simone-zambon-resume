import { Route, Switch } from "react-router";
import { EXPERIENCES_ROUTES } from "../routes";

const Experiences: React.FC = () => {
    return (
        <div className="experience-section">      
            <Switch>
                { EXPERIENCES_ROUTES.map((route, index) => {
                    const Component = route.component;
                    return (
                        <Route
                            path={route.path}
                            exact
                            key={index}
                            render={(renderProps) => (
                                <Component {...renderProps}/>
                            )}
                        />
                    )
                })}
            </Switch>
        </div>
    )
}
export default Experiences;