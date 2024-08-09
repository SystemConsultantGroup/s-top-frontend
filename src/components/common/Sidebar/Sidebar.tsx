import classes from "./Sidebar.module.css";

export function Sidebar({ children }: { children: React.ReactNode }) {
  return (
    <aside className={classes.root}>
      <nav className={classes.nav}>
        <div className={classes.container}>{children}</div>
      </nav>
    </aside>
  );
}
