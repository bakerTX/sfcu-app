function LoginGrid() {
  return (
    <div className={styles.loginGrid}>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
        <button
          onClick={() => {
            console.log("type", typeof num);
            handleClick(num);
          }}
          className={styles.button}
          key={`login-num-${num}`}
        >
          {num}
        </button>
      ))}
    </div>
  );
}

export default LoginGrid;
