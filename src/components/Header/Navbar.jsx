import React, { useState } from "react";
import Navbar from "@material-tailwind/react/Navbar";
import NavbarContainer from "@material-tailwind/react/NavbarContainer";
import NavbarWrapper from "@material-tailwind/react/NavbarWrapper";
import NavbarBrand from "@material-tailwind/react/NavbarBrand";
import NavbarToggler from "@material-tailwind/react/NavbarToggler";
import NavbarCollapse from "@material-tailwind/react/NavbarCollapse";
import Nav from "@material-tailwind/react/Nav";
import NavLink from "@material-tailwind/react/NavLink";
import Button from "@material-tailwind/react/Button";

export default function Header() {
  const [openNavbar, setOpenNavbar] = useState(false);

  return (
    <Navbar color="transparent" navbar>
      <NavbarContainer>
        <NavbarWrapper>
          <NavbarBrand>
            <span className="text-xl">Learn</span>{" "}
            <span className="text-primary-800 text-2xl">R</span>
          </NavbarBrand>
          <NavbarToggler
            color="white"
            onClick={() => setOpenNavbar(!openNavbar)}
            ripple="light"
          />
        </NavbarWrapper>

        <NavbarCollapse open={openNavbar}>
          <Nav>
            <NavLink active="light" href="/" ripple="light">
              Home
            </NavLink>
            <NavLink href="/about-us" ripple="light">
              About Us
            </NavLink>
            <NavLink href="/courses" ripple="light">
              Courses
            </NavLink>
            <NavLink href="/become-a-teacher" ripple="light">
              Become A Teacher
            </NavLink>
            <NavLink href="/signin" ripple="light">
              <Button
                color="amber"
                buttonType="filled"
                size="regular"
                rounded={false}
                block={false}
                iconOnly={false}
                ripple="dark"
              >
                Get Started
              </Button>
            </NavLink>
          </Nav>
        </NavbarCollapse>
      </NavbarContainer>
    </Navbar>
  );
}
