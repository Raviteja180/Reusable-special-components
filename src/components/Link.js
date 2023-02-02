import useNavigation from "../hooks/use-navigation";
import classNames from "classnames";

function Link({to,children,className,activeClassName}){
    const {navigate,currentPath } = useNavigation()
    const classes = classNames(
        'text-blue-500',
        'mb-3',
        className,
        currentPath == to && activeClassName
        );
    const handleClick = (e) => {
    if (e.metaKey || e.ctrlKey){
        return;
    }
        // console.log(e)
        e.preventDefault();
        navigate(to);
    }
    return (
        <a className={classes} href={to} onClick={handleClick}>{children}</a>
    )

}
export default Link;