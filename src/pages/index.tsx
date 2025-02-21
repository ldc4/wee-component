import React from 'react';
import { useEffect } from 'react';

import { shadcn } from '../components';

const {
  Button,
  Card,
  CardHeader,
  CardContent,
  Separator,
} = shadcn;

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
      <Card className="w-[450px]">
        <CardHeader>
          <div className="flex justify-between">
            <Button className="w-[280px]">轻松开始</Button>
            <Button variant="outline" className="w-[80px]">补单</Button>
          </div>
          <div>
            <Separator />
          </div>
        </CardHeader>
        <CardContent>
          一片区域
        </CardContent>
      </Card>
    </div>
  )
}