import React from 'react'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { Todo } from '../Pages/Todo'
import { Form } from '../Pages/Form'
import Register from '../Pages/Register'
import { Private_Routes } from './Private_Routes'
import { Public_Routes } from './Public_Routes'

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path="" element={<Private_Routes />}>
                <Route path="" element={<Todo />} />
            </Route>
            <Route path='' element={<Public_Routes />}>
            <Route path='login' element={<Form />} />
            <Route path='register' element={<Register />} />
            </Route>
        </Route>
    )
)

export default function Router_App() {
  return <RouterProvider router={router} />
}
