import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { ProductType } from '../ProductType/ProductType';
import { useNavigate } from 'react-router-dom';
import styles from '../../styles';
import EditIcon from "../../Components/Icons/EditIcon/EditIcon";
import DeleteIcon from "../../Components/Icons/DeleteIcon/DeleteIcon";
import ProductsLists from "../../Components/ProductsLists/ProductsLists";

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
    const newProductsList = products.filter(product => product.id !== id);
    console.log(`Deleting product with ID ${id}`);
    console.log(newProductsList); // optional, to check that the product was removed from the array
    ProductsLists.splice(id-1, 1,);
  };  

  const getStocksColor = (stocks: number) => {
    if (stocks >= 10) {
      return 'green';
    } else if (stocks >= 4) {
      return 'orange';
    } else {
      return 'red';
    }
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
            <TableRow
              key={product.id}
              style={{
                backgroundColor: getStocksColor(product.stocks),
              }}
            >
              <TableCell style={{ color: 'white' }}>{product.id.toString().padStart(3, '0')}</TableCell>
              <TableCell style={{ color: 'white' }}>{product.name}</TableCell>
              <TableCell style={{ color: 'white' }}>{product.lastModified}</TableCell>
              <TableCell style={{ color: 'white' }}>
                <div style={{ display: "flex", gap: 8 }}>
                  <button onClick={() => handleEdit(product.id)}
                    style={{
                    ...styles.button_primary,
                    display: "flex",
                    alignItems: "center",
                    backgroundColor: "transparent",
                    borderRadius: 50,
                  }}>
                  <EditIcon size={3} color="white" />
                  <span style={styles.text_medium}>Edit</span>
                  </button>
                  <button onClick={() => handleDelete(product.id)}
                    style={{
                    ...styles.button_primary,
                    display: "flex",
                    alignItems: "center",
                    backgroundColor: "transparent",
                    borderRadius: 50,
                  }}>
                  <DeleteIcon size={3} color="white" />
                  <span style={styles.text_medium}>Delete</span>
                  </button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
