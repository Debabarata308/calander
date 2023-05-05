import React, { useContext, useState } from "react";
import GlobalContext from "../context/GlobalContext";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const bull = (
  <Box
    component="span"
    sx={{
      display: "inline-block",
      mx: "2px",
      transform: "scale(0.8)"
    }}
  >
    •
  </Box>
);

export default function Cart() {
  const { addToCartImage, setShowCart, setAddToCartImage } =
    useContext(GlobalContext);

  const handleDelete = (item, index) => {
    let tempData = [];
    addToCartImage.map((el) => {
      tempData.push(el);
    });
    tempData = tempData.filter((el) => el.id !== item.id);
    setAddToCartImage(tempData);
  };
  return (
    <div className="row m-5">
      <div className="col">
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            {addToCartImage &&
              addToCartImage.map((item, index) => {
                return (
                  <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                      <div
                        className="row flex"
                        style={{ justifyContent: "space-between" }}
                      >
                        <div className="col">{index + 1} :</div>
                        <div className="col">{item.title}</div>
                        <div className="col">
                          <img
                            src={item.image}
                            style={{
                              width: "10rem",
                              height: "10rem"
                            }}
                            alt=""
                          />
                        </div>
                        <div className="col">
                          <Button
                            variant="contained"
                            color="error"
                            size="small"
                            onClick={() => handleDelete(item, index)}
                          >
                            Delete
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
          </CardContent>
          <CardActions>
            <div className="row w-10" style={{ width: "100%" }}>
              <div className="col" style={{ textAlign: "right" }}>
                <Button
                  type="button"
                  size="small"
                  onClick={() => {
                    setShowCart(false);
                    setAddToCartImage(null);
                  }}
                >
                  Close
                </Button>
              </div>
            </div>
          </CardActions>
        </Card>
      </div>
    </div>
  );
}
