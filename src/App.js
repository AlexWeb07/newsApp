import './App.css';
import React, { Component } from 'react'
import { Route,Routes } from 'react-router-dom';
import MyNav from './Components/MyNav'
import News from './Components/News'


export default class App extends Component {
  render() {
    return (
      
      <Routes>
        <Route 
          path='/' 
          element={
            <div>
              <MyNav></MyNav>
              <News 
                key={1}
                pageSize="15" 
                category="general" 
                apiKey="ec3344849c554f449ae43cc4e37409ea"
              />
            </div>}>
        </Route>
        <Route 
          path='business' 
          element={
            <div>
              <MyNav></MyNav>
              <News 
                key={2}
                pageSize="15" 
                category="business" 
                apiKey="ec3344849c554f449ae43cc4e37409ea"
              />
            </div>}>
        </Route>
        <Route 
          path='entertainment' 
          element={
            <div>
              <MyNav></MyNav>
              <News 
                key={3}
                pageSize="15" 
                category="entertainment" 
                apiKey="ec3344849c554f449ae43cc4e37409ea"
              />
            </div>}>
        </Route>
        <Route 
          path='health' 
          element={
            <div>
              <MyNav></MyNav>
              <News 
                key={4}
                pageSize="15" 
                category="health" 
                apiKey="ec3344849c554f449ae43cc4e37409ea"
              />
            </div>}>
        </Route>
        <Route 
          path='science' 
          element={
            <div>
              <MyNav></MyNav>
              <News 
                key={5}
                pageSize="15" 
                category="science" 
                apiKey="ec3344849c554f449ae43cc4e37409ea"
              />
            </div>}>
        </Route>
        <Route 
          path='sports' 
          element={
            <div>
              <MyNav></MyNav>
              <News 
                key={6}
                pageSize="15" 
                category="sports" 
                apiKey="ec3344849c554f449ae43cc4e37409ea"
              />
            </div>}>
        </Route>
        <Route 
          path='technology' 
          element={
            <div>
              <MyNav></MyNav>
              <News 
                key={7}
                pageSize="15" 
                category="technology" 
                apiKey="ec3344849c554f449ae43cc4e37409ea"
              />
            </div>}>
        </Route>
      </Routes>
    )
  }
}


 