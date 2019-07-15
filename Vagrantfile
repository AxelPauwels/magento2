Vagrant.configure(2) do |config|
    config.vm.define "AXEL" do |r|
        r.vm.box = "phpro/phpro-hypernode"
        r.vm.hostname = "axel.local"
    	r.vm.box_version = "0.3.0"
        r.vm.network "private_network", ip: "192.168.33.198"
        r.vm.box_url = "https://s3-eu-west-1.amazonaws.com/phpro-vagrant-boxes/vagrant/json/phpro/phpro-hypernode.json"
    end

    $script = <<-SCRIPT
        export DEBIAN_FRONTEND=noninteractive && sudo apt-get install -y cachefilesd -qq > /dev/null 2>&1 && echo "RUN=yes" | sudo tee --append  /etc/default/cachefilesd && sudo systemctl start cachefilesd
    SCRIPT

    config.vm.provision "shell", inline: $script
    config.vm.synced_folder ".", "/vagrant", type: "nfs"

    Dir.glob('provision-scripts/*.sh').sort.each do |bash_script|
        config.vm.provision :shell, :path => bash_script, run: "always"
    end
    config.vm.provider "virtualbox" do |v|
        v.memory = 2048
        v.cpus = 2
    end
end
#default use is nfs. If you wish to use regular mounts, comment out load 'nfs-mount' and uncomment load 'vagrant-mount'.
load 'nfs-mount'
#load 'vagrant-mount'

