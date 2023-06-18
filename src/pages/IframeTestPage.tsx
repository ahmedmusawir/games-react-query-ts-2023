import { Box, Button } from "@chakra-ui/react";
import React, { useState } from "react";

enum DeviceType {
  Desktop = "1366px",
  IPad = "768px",
  IPhone = "375px",
}

function DevicePreview() {
  const [device, setDevice] = useState<DeviceType>(DeviceType.Desktop);

  return (
    <div>
      <Box marginY={10}>
        <Button margin={2} onClick={() => setDevice(DeviceType.Desktop)}>
          Desktop
        </Button>
        <Button
          margin={2}
          className=""
          onClick={() => setDevice(DeviceType.IPad)}
        >
          IPad
        </Button>
        <Button className="" onClick={() => setDevice(DeviceType.IPhone)}>
          IPhone
        </Button>
      </Box>

      <iframe
        src="https://selflist.com"
        title="preview"
        style={{ width: device, height: "100vh" }}
      />
    </div>
  );
}

export default DevicePreview;
