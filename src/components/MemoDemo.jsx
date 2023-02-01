/**
 * example state in parent
 *   const [data, setData] = useState(['hello', 'aaa', 'bbb']);
 *   const [filterText, setfilterText] = useState('');
 */

const customComparator = (prevProps, nextProps) => {
  return nextProps.filterText === prevProps.filterText;
  // return nextProps.data?.[0] === prevProps.data?.[0];
};

const MemoDemo = React.memo(({ data, filterText }) => {
  useEffect(() => {
    console.log('🚀 ~ file: App.jsx:17 ~ useEffect ~ filterText', filterText);
  }, [filterText]);

  const filteredData = data.filter((item) => item.includes(filterText));

  return (
    <ul>
      {filteredData.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}, customComparator);
