import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

type Product = {
  id: number;
  name: string;
  stocks: number;
  lastModified: string;
};

type ProductInfoProps = {
  products: Product[];
};

export default function InventoryInfo(props: ProductInfoProps) {
  const { products } = props;

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell style={{ color: 'white' }}>Product ID</TableCell>
            <TableCell style={{ color: 'white' }}>Product Name</TableCell>
            <TableCell style={{ color: 'white' }}>Stocks</TableCell>
            <TableCell style={{ color: 'white' }}>Last Modified</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product.id}>
              <TableCell style={{ color: 'white' }}>{product.id}</TableCell>
              <TableCell style={{ color: 'white' }}>{product.name}</TableCell>
              <TableCell style={{ color: 'white' }}>{product.stocks}</TableCell>
              <TableCell style={{ color: 'white' }}>{product.lastModified}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
