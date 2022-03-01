import FavoriteBooks from './FavoriteBooks';
import classes from './Layout.module.css';

function Layout(props) {
  return (
    <div>
      <FavoriteBooks />
      <main className={classes.main}>{props.children}</main>
      <div className={classes.footer}>
        <span className={classes.footer_text}>What is your favorite book?</span>
      </div>
    </div>
  );
}

export default Layout;
