'use client'
import {useEffect} from 'react'
import { useIsLoggedIn } from '@/app/_stores/user/hooks'
import React from 'react'
import LoginModal from './LoginModal'
import ProfileDropdown from './ProfileDropdown'
import {  setInitial } from '@/app/_stores/user/actions'


export const Auth = () => {
    const isLoggedIn = useIsLoggedIn()
    useEffect(() => {
      setInitial()
    }, [])
  return (
    <div>
          {
              !isLoggedIn ?
                  <LoginModal />
                  :
                  <>
                      <ProfileDropdown />
                     
                  </>
          }
    </div>
  )
}
