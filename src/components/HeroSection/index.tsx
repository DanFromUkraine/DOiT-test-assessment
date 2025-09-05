import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";

export default function HeroSection() {
      return (
            <Box className="rounded-xl bg-gradient-to-r from-blue-100 via-blue-50 to-pink-100 mt-12 p-12 flex flex-col items-center gap-5 dark:from-[#2a3237] dark:via-[#1a1b2e] dark:to-[#4b0082] dark:text-white">
                  <Typography className="text-5xl font-normal">
                        Ласкаво просимо до DOiT MVP
                  </Typography>
                  <Typography>
                        Ми працюємо над MVP освітньої платформи. Приєднуйтесь до
                        команди!
                  </Typography>
                  <Box className="w-full flex justify-center gap-4">
                        <Button variant="contained" startIcon={<FormatListBulletedIcon />}>
                              ПЕРЕГЛЯНУТИ ПОСТИ
                        </Button>
                        <Button variant="outlined" startIcon={<AddCircleIcon />}>
                              ДОДАТИ ПОСТ
                        </Button>

                  </Box>
            </Box>
      );
}
