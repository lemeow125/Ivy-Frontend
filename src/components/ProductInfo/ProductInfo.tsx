import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { ProductType } from '../ProductType/ProductType';
import { useNavigate } from 'react-router-dom';

type ProductInfoProps = {
  products: ProductType[];
};

export default function ProductInfo(props: ProductInfoProps) {
  const { products } = props;
  const navigate = useNavigate();

  const handleEdit = (id: number) => {
    navigate(`/Products/EditProduct/${id.toString().padStart(3, '0')}`);
  };

  const handleDelete = (id: number) => {
    console.log(`Deleting product with ID ${id}`);
  };

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell style={{ color: 'white' }}>Product ID</TableCell>
            <TableCell style={{ color: 'white' }}>Product Name</TableCell>
            <TableCell style={{ color: 'white' }}>Last Modified</TableCell>
            <TableCell style={{ color: 'white' }}>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product.id}>
              <TableCell style={{ color: 'white' }}>{product.id.toString().padStart(3, '0')}</TableCell>
              <TableCell style={{ color: 'white' }}>{product.name}</TableCell>
              <TableCell style={{ color: 'white' }}>{product.lastModified}</TableCell>
              <TableCell style={{ color: 'white' }}>
                <button onClick={() => handleEdit(product.id)}>Edit</button>
                <button onClick={() => handleDelete(product.id)}>Delete</button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
