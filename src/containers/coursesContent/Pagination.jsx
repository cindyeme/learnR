import React from "react";
import Pagination from "@material-tailwind/react/Pagination";
import PaginationItem from "@material-tailwind/react/PaginationItem";
import Icon from "@material-tailwind/react/Icon";

export default function Pagiination() {
  return (
    <Pagination>
      <PaginationItem
        button
        color="white"
        href="#last"
        ripple="light"
        className="hover:bg-grayish-light hidden lg:flex"
      >
        First
      </PaginationItem>
      <PaginationItem
        href="#last"
        color="white"
        ripple="light"
        className="hover:bg-grayish-light"
      >
        <Icon name="keyboard_arrow_left" />
      </PaginationItem>
      <PaginationItem
        color="amber"
        href="#1"
        ripple="light"
      >
        1
      </PaginationItem>
      <PaginationItem
        href="#2"
        color="white"
        ripple="light"
        className="hover:bg-grayish-light"
      >
        2
      </PaginationItem>
      <PaginationItem
        href="#3"
        color="white"
        ripple="light"
        className="hover:bg-grayish-light"
      >
        3
      </PaginationItem>
      <PaginationItem
        href="#4"
        color="white"
        ripple="light"
        className="hover:bg-grayish-light"
      >
        4
      </PaginationItem>
      <PaginationItem
        href="#5"
        color="white"
        ripple="light"
        className="hover:bg-grayish-light"
      >
        5
      </PaginationItem>
      <PaginationItem
        href="#last"
        color="white"
        ripple="light"
        className="hover:bg-grayish-light"
      >
        <Icon name="keyboard_arrow_right" />
      </PaginationItem>
      <PaginationItem
        button
        color="white"
        href="#last"
        ripple="light"
        className="hover:bg-grayish-light hidden lg:flex"
      >
        Last
      </PaginationItem>
    </Pagination>
  );
}
