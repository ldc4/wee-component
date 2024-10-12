import React from 'react';
import { useEffect } from 'react';

import {
  Button,
  Checkbox,
  Input,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from '../components';

import './index.css';

function init() {
  console.log('init');
}

export default function App() {
  useEffect(() => {
    init();
  }, []);

  const [position, setPosition] = React.useState("bottom")

  return (
    <div className="app" id="app">
      <Button variant="outline" style={{ width: 360 }}></Button>
      <Checkbox />
      <Input value={'hello'} className='w-200' />
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">{position}</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
            <DropdownMenuRadioItem value="top">Top</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="bottom">Bottom</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="right">Right</DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}