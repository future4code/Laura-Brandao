export const goHome = (navigate) => {
  navigate("/");
};

export const goToCardPage = (navigate, name) => {
  navigate(`/card/${name}`);
};
