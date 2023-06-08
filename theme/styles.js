const styles = {
  global: (props) => ({
    // "::-webkit-scrollbar": {
    //   width: "10px",
    // },
    // /* Track */
    // " ::-webkit-scrollbar-track": {
    //   background: "#f1f1f1",
    // },

    // /* Handle */
    // " ::-webkit-scrollbar-thumb": {
    //   background: "#888",
    // },

    // /* Handle on hover */
    // "::-webkit-scrollbar-thumb:hover": {
    //   background: "#555",
    // },
    "html, body": {
      color: "black",
      height: "100%",
      scrollbarColor: "#a5a5a5 transparent" /* thumb and track color */,
      scrollbarWidth: "thin",
    },
    ".truncate": {
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
    },
    ".multiLineTruncate": {
      display: "-webkit-box",
      WebkitLineClamp: "3",
      WebkitBoxOrient: "vertical",
      overflow: "hidden",
    },
    ".animateLink": {
      position: "relative",
      "::after": {
        content: "''",
        position: "absolute",
        height: "1px",
        width: "0%",
        top: "97%",
        left: "0",
        backgroundColor: "limeText",
        transition: "0.5s ease all",
      },
      ":hover::after": {
        width: "100%",
        transition: "0.5s ease all",
      },
    },
    ".strokeTransition": {
      transition: "stroke 0.3s",
    },
    ".linkBtnIconHover": {
      "span svg path": {
        transition: "fill 0.3s ease-in-out",
      },
      ":hover": {
        "span svg path": {
          transition: "fill 0.3s ease-in-out",
          fill: "black",
        },
      },
    },
    ".cameraBtn": {
      cursor: "pointer",
      ".bgFill, .fgStroke, .fgFill": {
        transition: "fill 0.3s  ease-in-out, stroke 0.3s  ease-in-out",
      },
      ":hover": {
        ".bgFill": {
          fill: "black",
          transition: "fill 0.3s  ease-in-out",
        },
        ".fgStroke": {
          stroke: "white",
          transition: "stroke 0.3s  ease-in-out",
        },
        ".fgFill": {
          fill: "white",
          transition: "fill 0.3s  ease-in-out",
        },
      },
    },
    ".continueBtn": {
      ".fgStroke": {
        transition: "fill 0.3s  ease-in-out, stroke 0.3s  ease-in-out",
      },
      ":hover": {
        ".fgStroke": {
          stroke: "white",
          transition: "stroke 0.3s  ease-in-out",
        },
      },
    },
    ".backBtn": {
      ".fgStroke": {
        stroke: "limeText",
        transition: "fill 0.3s  ease-in-out, stroke 0.3s  ease-in-out",
      },
      ":hover": {
        ".fgStroke": {
          stroke: "black",
          transition: "stroke 0.3s  ease-in-out",
        },
      },
    },
    ".divBottomBorder": {
      position: "relative",
      ":after": {
        content: "''",
        position: "absolute",
        bottom: "0",
        height: "1px",
        width: "90%",
        borderBottom: "1px solid #EAE8E8",
      },
    },
    ".chatHeaderBottomBorder": {
      position: "relative",
      ":after": {
        content: "''",
        position: "absolute",
        bottom: "0",
        height: "1px",
        width: "95%",
        borderBottom: "1px solid #EAE8E8",
        left: "0",
        right: "0",
        marginLeft: "auto",
        marginRight: "auto",
      },
    },
    ".myProfileMenuTriangle": {
      position: "absolute",
      display: "block",
      top: "-2%",
      left: "90%",
      transform: "translate(-50%, -50%)",
      borderLeft: "5px solid transparent",
      borderRight: "5px solid transparent",
      borderBottom: "5px solid",
      borderBottomColor: "black",
    },
    ".removeMarginRightScrollbar": {
      marginRight: "0px !important",
    },
    ".tableRowHover": {
      bgColor: "inherit",
      cursor: "pointer",
      transition: "all 0.3s ease-in-out",
      _hover: {
        bgColor: "backgroundGrey",
      },
    },
    ".unreadMessagesBorder": {
      ":after": {
        content: "''",
        position: "absolute",
        height: "1px",
        top: "50%",
        transform: "translateY(-50%)",
        left: "0",
        width: "37%",
        backgroundColor: "#B2D404",
      },
      ":before": {
        content: "''",
        position: "absolute",
        height: "1px",
        top: "50%",
        transform: "translateY(-50%)",
        right: "0",
        width: "37%",
        backgroundColor: "#B2D404",
      },
    },
    ".message-url-link": {
      color: "black",
      textDecoration: "underline",
      fontWeight: "500",
    },
  }),
};

export default styles;
