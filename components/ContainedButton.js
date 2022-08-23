import { Button } from '@mui/material'


export default function ContainedButton({ children, ...props }) {
  return (
    <Button
      sx={{
        px: props.px ? props.px : null,
        py: props.py ? props.py : null,
        mt: props.mt ? props.mt : null,
        mb: props.mb ? props.mb : null,
        ml: props.ml ? props.ml : null,
        width: props.width ? props.width : null,
        backgroundColor: '#7D749E',
        '&:hover': {
          backgroundColor: '#884FAA'
        }
      }}
      type={ props.type ? props.type : null }
      size={ props.size ? props.size : null }
      startIcon={ props.startIcon ? props.startIcon : null }
      onClick={ props.onClick ? props.onClick : null }
      variant='contained'
    >
      { children }
    </Button>
  )
}
