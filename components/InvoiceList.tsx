import InvoiceActions from "./InvoiceActions";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";

export default function InvoiceList(){

    return(
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>
                        ID
                    </TableHead>
                    <TableHead>
                        Customer
                    </TableHead>
                    <TableHead>
                        Amount
                    </TableHead>
                    <TableHead>
                        Status
                    </TableHead>
                    <TableHead>
                        Date
                    </TableHead>
                    <TableHead className="text-right">
                        Actions
                    </TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow>
                    <TableCell>
                        #1
                    </TableCell>
                    <TableCell>
                        motaher
                    </TableCell>
                    <TableCell>
                        $55.50
                    </TableCell>
                    <TableCell>
                        Paid
                    </TableCell>
                    <TableCell>
                        22/11/2025
                    </TableCell>
                    <TableCell className="text-right">
                     <InvoiceActions/>
                    </TableCell>
                </TableRow>
            </TableBody>
        </Table>
    )
}