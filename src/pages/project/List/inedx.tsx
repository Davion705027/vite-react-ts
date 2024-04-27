import { Button, Space, Tabs, TabsProps } from "antd";
import { useEffect, useState } from "react";

export interface IListProps {
  list: ITodo[];
}

export function List(props: IListProps) {
  const {list} = props;
  const handleFinish = (item: ITodo) => {
    item.finished = true;

    setShowList(
        list.filter(item => activeKey=='0'? !item.finished : item.finished)
    ) 
  };

  const items: TabsProps['items'] = [
    {
      key: '0',
      label: '未完成',
    },
    {
      key: '1',
      label: '已完成',
    },]

  const [activeKey,setActiveKey] = useState(items[0].key);  
  const [showList,setShowList] = useState<ITodo[]>([]);

  useEffect(() => {
    setShowList(
        list.filter(item => activeKey=='0'? !item.finished : item.finished)
    ) 
  },[activeKey,list])

  return (
    <div>
      <h1>List</h1>
        <Tabs defaultActiveKey={activeKey} items={items} onChange={setActiveKey}></Tabs>
        {showList.map((item,index) => {
            return (
            <div key={index}>
                {item.title} <Space></Space>
                <Button onClick={() => handleFinish(item)}>完成</Button>
            </div>
            );
        })}
    </div>
  );
}
