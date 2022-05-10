import * as React from 'react';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import { DataGrid } from "@mui/x-data-grid";
import { styled } from "@mui/material/styles";
import EditIcon from '@mui/icons-material/Edit';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import TextareaAutosize from '@mui/material/TextareaAutosize';

const DataGridContainer = styled("div")({
    //height: '340px',
    width: "100%" 
});

const TableToolBar = styled(Paper)(
    ({ theme }) => ({
        width: 300,
        [theme.breakpoints.up('xs')]: {
            width: '100%'
        },
        [theme.breakpoints.up('sm')]: {
            width: '320px'
        },
        background: 'inherit',
        boxShadow: 'none',
        border: '1px solid #aab7b8',
        borderRadius: 'unset'
    })
);

const RowDetailContainer = styled("div")({
    height: '42%',
    background: 'white',
    padding: '10px',
    overflow: 'scroll',
    '::-webkit-scrollbar': {
        '-webkit-appearance': 'none',
        'width': '10px',
    },
    '::-webkit-scrollbar-thumb': {
        borderRadius: '5px',
        backgroundColor: 'rgba(0,0,0,.5)',
        '-webkit-box-shadow': '0 0 1px rgba(255,255,255,.5)',
    }
});

const RowDetail = styled("div")({
    display: 'flex',
    flexWrap: 'wrap'
});

const CellDetail = styled("div")(
    ({ theme }) => ({
        padding: '0 32px',
        margin: '15px 0',
        borderLeft: '1px solid #eaeded',
        [theme.breakpoints.up('xs')]: {
            maxWidth: '100%',
            flex: '0 0 100%'
        },
        [theme.breakpoints.up('sm')]: {
            maxWidth: '50%',
            flex: '0 0 50%'
        },
        [theme.breakpoints.up('md')]: {
            maxWidth: '33%',
            flex: '0 0 33%'
        },
        [theme.breakpoints.up('lg')]: {
            maxWidth: '25%',
            flex: '0 0 25%'
        },
    })
);

const ModalBox = styled(Box)(
    ({ theme }) => ({
        position: 'absolute',
        top: '30%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        [theme.breakpoints.up('xs')]: {
            width: 300
        },
        [theme.breakpoints.up('sm')]: {
            width: 400
        },
        background: 'white',
        padding: '30px 20px',
        boxShadow: '0 6px 10px 0 rgb(33 33 33 / 14%), 0 1px 18px 0 rgb(33 33 33 / 6%), 0 3px 10px 0 rgb(33 33 33 / 10%)',
    })
)

const columns = [
    {
        field: "problemStatement",
        headerName: "Problem Statement",
        minWidth: 250
    },
    {
        field: "memberExperience",
        headerName: "Member Experience",
        width: 200
    },
    {
        field: "capability",
        headerName: "Capability",
        width: 200
    },
    // {
    //     field: "errorPercentage",
    //     headerName: "Error Percentage",
    //     type: "number",
    //     width: 200,
    //     renderCell: (params) => {
    //         return params.value ? params.value + "%" : null;
    //     },
    // },
    {
        field: "currentState",
        headerName: "Current State(Miliseconds)",
        type: "number",
        width: 200
    },
    {
        field: "targetState",
        headerName: "Target State(Miliseconds)",
        type: "number",
        width: 200
    },
    {
        field: "savings",
        headerName: "Savings(Miliseconds)",
        type: "number",
        width: 200
    },
    {
        field: "recommendation",
        headerName: "Recommendation",
        width: 200
    },
    {
        field: "stakeholders",
        headerName: "Stakeholders",
        width: 200
    },
    // {
    //     field: "successRateDefinition",
    //     headerName: "Success Rate Definition ",
    //     type: "number",
    //     width: 200,
    //     renderCell: (params) => {
    //         return params.value ? params.value + "%" : null;
    //     },
    // },
    // {
    //     field: "varianceToSLA",
    //     headerName: "Variance to SLA (SRD)",
    //     type: "number",
    //     width: 200,
    //     renderCell: (params) => {
    //         return params.value ? params.value + "%" : null;
    //     },
    // },
    // {
    //     field: "rtt95Th",
    //     headerName: "95th RTT",
    //     type: "number",
    //     width: 200
    // },
    // {
    //     field: "volumePerDay",
    //     headerName: "Average Volume per day",
    //     type: "number",
    //     width: 200
    // },
    // {
    //     field: "rountTripTimeWithStargate",
    //     headerName: "Round Trip Time with Stargate",
    //     type: "number",
    //     width: 200
    // },
    // {
    //     field: "totalRountTripTime",
    //     headerName: "Total Round trip time",
    //     type: "number",
    //     width: 200
    // },
    // {
    //     field: "subCategory",
    //     headerName: "Sub Category",
    //     width: 200
    // },
    // {
    //     field: "optumPartner",
    //     headerName: "Optum Partner",
    //     width: 200
    // },
    // {
    //     field: "optumPartnerEmail",
    //     headerName: "Optum Partner email ",
    //     width: 200
    // },
    // {
    //     field: "oDPartner",
    //     headerName: "OD Partner",
    //     width: 200
    // },
    // {
    //     field: "oDPartnerEmail",
    //     headerName: "OD Partner email ",
    //     width: 200
    // },
    {
        field: "comments",
        headerName: "Comments",
        minWidth: 200
    },
    {
        field: "url",
        headerName: "URL",
        minWidth: 200
    },
];

const defaultRows = [
    {
        id: 1,
        problemStatement: "Performance improvement",
        memberExperience: "Login",
        capability: 'RBA',
        currentState: 6000,
        targetState: 2000,
        savings: 4000,
        recommendation: 'Migrate RBA to mico-service with HSID and reduce redirects',
        stakeholders: "Rajagopalan Jayaraman, Sudhashina Pal",
        comments: "OCIS team will additionally review and identify stop gap measures to improve member experience",
        url: "https://rba-ose.healthsafe-id.com/aa-web/evaluate?execution=e1s2&action=securityQuestion"
        
    },
    {
        id: 2,
        problemStatement: "Performance improvement",
        memberExperience: "Login",
        capability: 'Header Footer',
        currentState: 650,
        targetState: 100,
        savings: 550,
        recommendation: 'Implemenation of Global Nav would result in calling a different library, additionally implementaiont of tag script and removal of standalone libraries',
        stakeholders: "Sudha Menon, Maria Melnicova",
        comments: "Implementation of Global Nav for coverage and benefits can be a partial validation of this improvement. BizOps teams will validate.",
        url: "https://member.uhc.com/shared-header-footer.json"
        
    },
    {
        id: 3,
        problemStatement: "Performance improvement",
        memberExperience: "Login",
        capability: 'HSID',
        currentState: 466,
        targetState: 166,
        savings: 300,
        recommendation: 'Domain consolidation will increase performance and result in savings',
        stakeholders: "Amitava",
        comments: "Cause: New domain: sso.optum.com",
        url: ''
        
    },
    {
        id: 4,
        problemStatement: "Performance improvement",
        memberExperience: "Login",
        capability: 'Eligibility',
        currentState: 2000,
        targetState: 500,
        savings: 1500,
        recommendation: '',
        stakeholders: 'John Paul Perry',
        comments: 'Met up with Brian Lee from core team who has requested us to meet with John Paul Perry',
        url: "https://api.member.uhc.com/rest/chat-uhc/speakeasy/v1/member/eligibility"
        
    },
    {
        id: 5,
        problemStatement: "Performance improvement",
        memberExperience: "Login",
        capability: 'Cost Share',
        currentState: 2000,
        targetState: 500,
        savings: 1500,
        recommendation: '',
        stakeholders: 'John Paul Perry',
        comments: 'Met up with Brian Lee from core team who has requested us to meet with John Paul Perry',
        url: "https://api.member.uhc.com/rest/edge-dashboard/virtualcare/v1/eligibility/4dc3ecc0-e516-447b-8373-40bff9a40137/costshare"
        
    },
    {
        id: 6,
        problemStatement: "Performance improvement",
        memberExperience: "Login",
        capability: 'Fonts',
        currentState: 2000,
        targetState: 300,
        savings: 1700,
        recommendation: 'Incident ticket is to be raised for the Arcade team in the Token Project for further assessment',
        stakeholders: 'Sudha Menon, Maria Melnicova',
        comments: ' ',
        url: "https://api.member.uhc.com/rest/edge-dashboard/virtualcare/v1/eligibility/4dc3ecc0-e516-447b-8373-40bff9a40137/costshare"
        
    },
    {
        id: 7,
        problemStatement: "Performance improvement",
        memberExperience: "Login",
        capability: 'Assets',
        currentState: 3000,
        targetState: 300,
        savings: 2700,
        recommendation: 'Incident ticket is to be raised for the Arcade team in the Token Project for further assessment',
        stakeholders: 'Sudha Menon, Maria Melnicova',
        comments: ' ',
        url: "https://api.member.uhc.com/rest/edge-dashboard/virtualcare/v1/eligibility/4dc3ecc0-e516-447b-8373-40bff9a40137/costshare"
        
    },
    {
        id: 8,
        problemStatement: "Performance improvement",
        memberExperience: "Login",
        capability: 'Adobe',
        currentState: 1000,
        targetState: 600,
        savings: 400,
        recommendation: '',
        stakeholders: 'Jessica John Kim',
        comments: '',
        url: ""
        
    }
];

export default function Content() {
    const [rows, setRows] = React.useState(defaultRows);
    const [comment, setComment] = React.useState("");
    const [commentModalOpen, toggleCommentModal] = React.useState(false);
    const [rowDetails, setRowDetails] = React.useState(undefined);
    const [search, setSearch] = React.useState("");
    const handleGridStateChange = (state) => {
        if (!state.selection.length || state.selection.length > 1) {
            setRowDetails(undefined);
        } else if (state.selection.length === 1) {
            const selectedRow = rows.filter((row) => row.id === state.selection[0])[0];
            setRowDetails(selectedRow);
        }
    }
    const filteredRows = rows.filter((row) => {
        for(let key in row) {
            if(String(row[key]).toLowerCase().includes(search.toLowerCase())) {
                return true;
            }
        }
        return false;
    });
    const handleAddComment = () => {
        const updatedRows = rows.map((row) => {
            if(row.id === rowDetails.id) {
                row.actionPlan = comment;
            }
            return row;
        });
        setRows(updatedRows);
        toggleCommentModal(false);
        setTimeout(() => {
            window.alert("Comment Added!");
        }, 300);
    }
    return (
        <React.Fragment>
            <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap'}}>
                <Typography variant="h5" component="h1" sx={{ fontSize: 25 }}>
                    Analytics
                </Typography>
                <TableToolBar>
                    <Grid container alignItems="center">
                        <Grid item sx={{ padding: '6px', px: 1 }}>
                            <SearchIcon color="inherit" sx={{ display: 'block' }} />
                        </Grid>
                        <Grid item xs>
                            <TextField
                                fullWidth
                                placeholder="Search table"
                                InputProps={{
                                    disableUnderline: true,
                                    sx: { fontSize: 'default' },
                                }}
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                variant="standard"
                            />
                        </Grid>
                    </Grid>
                </TableToolBar>
            </Box>
            <DataGridContainer sx={{ my: 3 }}>
                <DataGrid
                    rows={filteredRows}
                    columns={columns}
                   pageSize={6}
                    rowsPerPageOptions={[6]}
                    density="compact"
                    autoPageSize
                    checkboxSelection
                    onStateChange={handleGridStateChange}
                    autoHeight
                />

            </DataGridContainer>
            {rowDetails && <RowDetailContainer>
                <RowDetail>
                    {
                        Object.keys(rowDetails).map((key, index) => {
                            if (!['id'].includes(key)) {
                                return (
                                    <CellDetail key={index}>
                                        <Typography variant="body2" display="block">
                                            {columns.filter((column) => column.field === key)[0]?.headerName}
                                        </Typography>
                                        <Typography variant="subtitle2" display="block" sx={{ display: 'flex', alignItems: 'end' }}>
                                            {rowDetails[key]}
                                            {key === 'actionPlan' && (
                                                <EditIcon 
                                                    sx={{ ml: 2, cursor: 'pointer', color: '#009be5' }} 
                                                    onClick={() => {
                                                        setComment(rowDetails.actionPlan);
                                                        toggleCommentModal(true);
                                                    }}
                                                />
                                            )}
                                        </Typography>
                                    </CellDetail>
                                )
                            }
                        })
                    }
                </RowDetail>
            </RowDetailContainer>}
            <Modal
                open={commentModalOpen}
                onClose={() => toggleCommentModal(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                disableEscapeKeyDown
            >
                <ModalBox>
                    <TextareaAutosize
                        placeholder="Add a comment..."
                        style={{ width: '100%', padding: '10px', font: 'inherit' }}
                        minRows={4}
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                    />
                    <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                        <Button variant="outlined" size='small' sx={{mt: 2, mr: 1}} onClick={() => toggleCommentModal(false)}>Close</Button>
                        <Button variant="contained" size='small' sx={{mt: 2}} onClick={handleAddComment}>Add Comment</Button>
                    </div>
                </ModalBox>
            </Modal>
        </React.Fragment>
    );
}
