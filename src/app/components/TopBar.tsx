import { Home, Search, ExploreOutlined, ClassOutlined, Camera } from "@mui/icons-material";
import { AppBar, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import React, { ReactElement } from "react";
import { HomePage } from "../pages/home";

interface IProps {
    currentPage: string;
    onTabClick: (page: "home" | "square" | "classification" | "search") => void;
}

export function TopBar(props: IProps) {
    return (
        <AppBar position='relative'>
            <Toolbar>
                <Camera sx={{ mr: 2 }} />
                <Typography variant='h5' color="inherit" sx={{
                    mr: 2
                }}>
                    PersecutionHub
                </Typography>
                <Tabs value={props.currentPage} textColor="inherit" indicatorColor="primary" centered>
                    <Tab value="home" onClick={() => props.onTabClick("home")} label="主页" icon={<Home />} iconPosition="start"></Tab>
                    <Tab value="square" onClick={() => props.onTabClick("square")} label="广场" icon={<ExploreOutlined />} iconPosition="start"></Tab>
                    <Tab value="classification" onClick={() => props.onTabClick("classification")} label="分类" icon={<ClassOutlined />} iconPosition="start"></Tab>
                    <Tab value="search" onClick={() => props.onTabClick("search")} label="搜索" icon={<Search />} iconPosition="start"></Tab>
                </Tabs>
            </Toolbar>
        </AppBar>
    )
}